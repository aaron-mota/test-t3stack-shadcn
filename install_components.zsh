components=(
    "accordion"
    "alert"
    "alert-dialog"
    "aspect-ratio"
    "avatar"
    "badge"
    "button"
    "calendar"
    "card"
    "carousel"
    "checkbox"
    "collapsible"
    "combobox"
    "command"
    "context-menu"
    "data-table"
    "date-picker"
    "dialog"
    "drawer"
    "dropdown-menu"
    "form"
    "hover-card"
    "input"
    "label"
    "menubar"
    "navigation-menu"
    "pagination"
    "popover"
    "progress"
    "radio-group"
    "resizable"
    "scroll-area"
    "select"
    "separator"
    "sheet"
    "skeleton"
    "slider"
    "sonner"
    "switch"
    "table"
    "tabs"
    "textarea"
    "toast"
    "toggle"
    "toggle-group"
    "tooltip"
)

# Loop through each component and install it
for component in "${components[@]}"; do
    echo "Installing @shadcn-ui/$component..."
    pnpm pnpm dlx shadcn-ui@latest add $component
    echo "@shadcn-ui/$component installed!"
done

echo "All components installed successfully!"