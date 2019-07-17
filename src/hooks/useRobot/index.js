import { useState } from "react";

export default () => {
  const [position, setPosition] = useState(null);
  return [position, setPosition];
}
