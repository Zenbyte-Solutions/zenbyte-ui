interface PageTitleProps {
    /** The main title text to display */
    title: string;
    /** Optional description text below the title */
    description?: string;
    /** Visual variant of the page title */
    variant?: 'default' | 'large';
    /** Additional CSS classes */
    className?: string;
}
export declare function PageTitle({ title, description, variant, className }: PageTitleProps): import("react/jsx-runtime").JSX.Element;
export default PageTitle;
