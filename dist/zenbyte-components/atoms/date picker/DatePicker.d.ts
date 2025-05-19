import React from "react";
import { Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
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
export declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
