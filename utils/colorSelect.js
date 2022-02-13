export const formatColorClass = (color) => {
  switch (color) {
    case "blue":
      return "bg-blue-500 hover:bg-blue-900";
    case "purple":
      return "bg-purple-500 hover:bg-purple-900";
    case "green":
      return "bg-green-500 hover:bg-green-900";
    case "red":
      return "bg-red-500 hover:bg-red-900";
    case "grey":
    case "gray":
      return "bg-gray-500 hover:bg-gray-900";
    default:
      return "bg-blue-500 hover:bg-blue-900";
  }
};
