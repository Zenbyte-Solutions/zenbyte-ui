import React, { useState } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import { Calendar } from "react-date-range";
import { addDays } from "date-fns";

// Import the required CSS files for react-date-range
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// Module augmentation for react-date-range types
declare module "react-date-range" {
  interface DateRangeProps {
    styles?: {
      wrapper?: React.CSSProperties;
      [key: string]: React.CSSProperties | undefined;
    };
    showSelectionPreview?: boolean;
    showStaticRange?: boolean;
  }

  interface CalendarProps {
    styles?: {
      wrapper?: React.CSSProperties;
      daySelection?: React.CSSProperties;
      [key: string]: React.CSSProperties | undefined;
    };
  }
}

/**
 * DatePicker Base Props Interface
 */
interface DatePickerBaseProps {
  /**
   * CSS class to apply to the component
   */
  className?: string;

  /**
   * Minimum date that can be selected
   */
  minDate?: Date;

  /**
   * Maximum date that can be selected
   */
  maxDate?: Date;

  /**
   * Number of months to display
   * @default 2 for range, 1 for single
   */
  months?: number;

  /**
   * Direction to show multiple months
   * @default "horizontal"
   */
  direction?: "horizontal" | "vertical";

  /**
   * Day of the week to start on (0 = Sunday, 1 = Monday, etc)
   * @default 0
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Date Range Picker Props Interface
 */
export interface DateRangePickerProps extends DatePickerBaseProps {
  /**
   * Mode of the date picker
   * @default "range"
   */
  mode?: "range";

  /**
   * Initial date range selection
   */
  initialDateRange?: Range[];

  /**
   * Function triggered when date range changes
   */
  onChange?: (ranges: Range[]) => void;

  /**
   * Show built-in preset date ranges like Today, This Week, etc.
   * @default true
   */
  showStaticRange?: boolean;

  /**
   * Whether to move both start and end dates when a range is first selected
   * @default false
   */
  moveRangeOnFirstSelection?: boolean;
}

/**
 * Single Date Picker Props Interface
 */
export interface SingleDatePickerProps extends DatePickerBaseProps {
  /**
   * Mode of the date picker
   * @default "single"
   */
  mode?: "single";

  /**
   * Initial selected date
   */
  initialDate?: Date;

  /**
   * Function triggered when date changes
   */
  onChange?: (date: Date) => void;
}

/**
 * Union type for DatePicker props
 */
export type DatePickerProps = DateRangePickerProps | SingleDatePickerProps;

/**
 * DatePicker Component
 *
 * A versatile date picker component that supports both single date and date range selection.
 * Fully styled to match the Zenbyte UI design system.
 */
export const DatePicker: React.FC<DatePickerProps> = (props) => {
  // Apply common styles
  const customStyles = {
    wrapper: {
      borderRadius: "10px",
      borderColor: "#E5E7EB",
      boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
    },
  };

  // Determine mode based on props
  const mode = props.mode || ("initialDateRange" in props ? "range" : "single");

  // Render based on mode
  if (mode === "range") {
    return <RangeDatePicker {...(props as DateRangePickerProps)} />;
  } else {
    return <SingleDatePicker {...(props as SingleDatePickerProps)} />;
  }
};

/**
 * Range Date Picker Component
 */
const RangeDatePicker: React.FC<DateRangePickerProps> = ({
  initialDateRange,
  onChange,
  className = "",
  minDate,
  maxDate,
  showStaticRange = true,
  months = 2,
  direction = "horizontal",
  weekStartsOn = 0,
  moveRangeOnFirstSelection = false,
}) => {
  // Default initial range if not provided
  const defaultRange: Range[] = [
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ];

  // State for the selected date range
  const [dateRanges, setDateRanges] = useState<Range[]>(
    initialDateRange || defaultRange
  );

  // Handle date range change
  const handleDateRangeChange = (item: RangeKeyDict) => {
    const newRanges = Object.values(item);
    setDateRanges(newRanges);

    if (onChange) {
      onChange(newRanges);
    }
  };

  // Apply custom styles
  const customStyles = {
    wrapper: {
      borderRadius: "10px",
      borderColor: "#E5E7EB",
      boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
    },
  };

  return (
    <div className={`zenbyte-date-range-picker ${className}`}>
      <DateRange
        ranges={dateRanges}
        onChange={handleDateRangeChange}
        moveRangeOnFirstSelection={moveRangeOnFirstSelection}
        months={months}
        direction={direction}
        weekStartsOn={weekStartsOn}
        minDate={minDate}
        maxDate={maxDate}
        rangeColors={["#6366F1"]}
        showSelectionPreview={true}
        showStaticRange={showStaticRange}
        styles={customStyles}
      />
    </div>
  );
};

/**
 * Single Date Picker Component
 */
const SingleDatePicker: React.FC<SingleDatePickerProps> = ({
  initialDate,
  onChange,
  className = "",
  minDate,
  maxDate,
  months = 1,
  direction = "horizontal",
  weekStartsOn = 0,
}) => {
  // State for the selected date
  const [date, setDate] = useState<Date>(initialDate || new Date());

  // Handle date change
  const handleDateChange = (date: Date) => {
    setDate(date);

    if (onChange) {
      onChange(date);
    }
  };

  // Apply custom styles
  const customStyles = {
    wrapper: {
      borderRadius: "10px",
      borderColor: "#E5E7EB",
      boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
    },
    daySelection: {
      backgroundColor: "#6366F1",
    },
  };

  return (
    <div className={`zenbyte-single-date-picker ${className}`}>
      <Calendar
        date={date}
        onChange={handleDateChange}
        months={months}
        direction={direction}
        weekStartsOn={weekStartsOn}
        minDate={minDate}
        maxDate={maxDate}
        color="#6366F1"
        styles={customStyles}
      />
    </div>
  );
};

export default DatePicker;
