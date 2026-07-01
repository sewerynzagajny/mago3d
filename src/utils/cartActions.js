import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";

export function openClearCartConfirmModal({ modalDispatch, cartDispatch }) {
  modalDispatch({
    type: "OPEN",
    payload: {
      status: "usun_wszystkie_itemy",
      onConfirm: () => {
        try {
          cartDispatch({
            type: "CLEAR_CART",
          });
          toast.success("Usunięto wszystkie produkty!", toastConfig);
        } catch (err) {
          toast.error(
            "Nie udało się usunąć wszystkich produktów!",
            toastConfig,
          );
        }
      },
    },
  });
}
