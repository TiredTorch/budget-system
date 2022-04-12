export const actionCreator = async (
    apiAction: () => any,
    successCallback: (arg0: string) => void,
    failureCallback: (arg0: unknown) => void,
) => {
  try {
    const data = await apiAction();
    if (data) {
      successCallback('/main');
    }
  } catch (error) {
    failureCallback(error);
  }
};
