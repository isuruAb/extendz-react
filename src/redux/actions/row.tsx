export function updateRow(row: any) {
  return async (dispatch: any) => {
    dispatch({
      type: "EDIT_ROW",
      data: row,
    });
  };
}
