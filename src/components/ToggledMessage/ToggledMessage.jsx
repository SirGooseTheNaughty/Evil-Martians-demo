export const ToggledMessage = ({ message, ...props }) => {
    if (!message) {
        return null;
    }

    return (
        <p role="alert" aria-live="polite" {...props}>{message}</p>
    );
}