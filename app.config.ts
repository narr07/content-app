export default defineAppConfig({
  ui: {
    primary: "permadi",
    gray: "permadi",
    container: {
      padding: "px-4 sm:px-10 lg:px-14",
      constrained: "max-w-7xl",
    },
    card: {
      background: "bg-gray-100 dark:bg-gray-900",
      rounded: "rounded-md",
      body: {
        padding: "px-2 py-3 sm:p-5",
      },
      header: {
        padding: "px-2 py-3 sm:p-5",
      },
      footer: {
        padding: "px-2 py-3 sm:p-5",
      },
    },
    notification: {
      title: "text-xs font-medium text-gray-900 dark:text-white",
      description: "mt-1 text-xs leading-4 text-gray-500 dark:text-gray-400",
      background: "bg-white dark:bg-gray-900",
      rounded: "rounded-md",
      padding: "px-2 py-3",
      icon: {
        base: "flex-shrink-0 w-5 h-5",
        color: "text-{color}-500 dark:text-kuning",
      },
      progress: {
        base: "absolute bottom-0 end-0 start-0 h-1",
        background: "bg-{color}-500 dark:bg-kuning",
      },
      default: {
        color: "primary",
        closeButton: {
          icon: "i-ph-x-duotone",
          color: "gray",
          variant: "link",
          padded: false,
        },
      },
    },
  },
});
