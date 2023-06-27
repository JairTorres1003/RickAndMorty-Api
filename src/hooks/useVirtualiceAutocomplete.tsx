import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Popper,
  autocompleteClasses,
  styled,
} from "@mui/material";
import React, {
  CSSProperties,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
} from "react";
import { IoSearchOutline } from "react-icons/io5";
import { VariableSizeList, ListChildComponentProps } from "react-window";

interface useVirtualiceAutocompleteProps {
  styleProp?: CSSProperties;
}

/**
 * Custom hook for virtualized autocomplete.
 * @param styleProp - Custom CSS properties to apply to the list items.
 * @returns ListboxComponent and StyledPopper components.
 */
export const useVirtualiceAutocomplete = ({
  styleProp,
}: useVirtualiceAutocompleteProps) => {
  const LISTBOX_PADDING = 8; //px

  const OuterElementContext = createContext({});

  /**
   * Renders a single row in the virtualized list.
   * @param props - ListChildComponentProps containing the data and style for the row.
   * @returns The rendered row component.
   */
  function renderRow(props: ListChildComponentProps) {
    const { data, index, style } = props;
    const dataSet = data[index];
    const inlineStyle: CSSProperties = {
      ...style,
      top: (style.top as number) + LISTBOX_PADDING,
      ...styleProp,
    };

    return (
      <ListItem {...dataSet[0]} dense sx={inlineStyle}>
        <ListItemIcon sx={{ minWidth: 32 }}>
          <IoSearchOutline size={16} />
        </ListItemIcon>
        <ListItemText primary={dataSet[1]} sx={{ m: 0 }} />
      </ListItem>
    );
  }

  /**
   * Forwarded ref for the outer element of the virtualized list.
   */
  const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
    const outerProps = useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
  });

  /**
   * Custom hook to reset the cache of the virtualized list.
   * @param data - The data used in the virtualized list.
   * @returns The ref object for the virtualized list.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function useResetCache(data: any) {
    const ref = useRef<VariableSizeList>(null);
    useEffect(() => {
      if (ref.current != null) {
        ref.current.resetAfterIndex(0, true);
      }
    }, [data]);
    return ref;
  }

  /**
   * Styled Popper component for the virtualized autocomplete.
   */
  const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
      boxSizing: "border-box",
      "& ul": {
        padding: 0,
        margin: 0,
      },
    },
  });

  /**
   * ListboxComponent for the virtualized autocomplete.
   * Adapter for react-window
   */
  const ListboxComponent = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLElement>
  >(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData: React.ReactChild[] = [];
    (children as React.ReactChild[]).forEach(
      (item: React.ReactChild & { children?: React.ReactChild[] }) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
      }
    );

    const itemCount = itemData.length;
    const itemSize = 36;

    /**
     * Gets the size of a child item in the virtualized list.
     * @param child - The child item.
     * @returns The size of the child item.
     */
    const getChildSize = (child: React.ReactChild) => {
      // eslint-disable-next-line no-prototype-builtins
      if (child.hasOwnProperty("group")) {
        return 48;
      }

      return itemSize;
    };

    /**
     * Calculates the height of the virtualized list.
     * @returns The height of the virtualized list.
     */
    const getHeight = () => {
      if (itemCount > 8) {
        return 8 * itemSize;
      }
      return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <VariableSizeList
            itemData={itemData}
            height={getHeight() + 2 * LISTBOX_PADDING}
            width="100%"
            ref={gridRef}
            outerElementType={OuterElementType}
            innerElementType="ul"
            itemSize={(index) => getChildSize(itemData[index])}
            overscanCount={5}
            itemCount={itemCount}
          >
            {renderRow}
          </VariableSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  });

  return { ListboxComponent, StyledPopper };
};
