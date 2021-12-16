import { useCallback, useState } from "react";

const useForceUpdate = () => {
  const [, _forceUpdate] = useState(new Date().valueOf());

  const forceUpdate = useCallback(() => _forceUpdate(new Date().valueOf()), []);

  return forceUpdate;
};

export default useForceUpdate;
