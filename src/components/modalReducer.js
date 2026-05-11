export const initialModalState = {
  isOpen: false,
  status: null,
  onConfirm: null,
};

export function modalReducer(state, action) {
  switch (action.type) {
    case "OPEN":
      return {
        isOpen: true,
        status: action.payload.status,
        onConfirm: action.payload.onConfirm,
      };
    case "CLOSE":
      return initialModalState;
    default:
      throw new Error("action unknown");
  }
}
