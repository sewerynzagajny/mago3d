import { useState, useRef } from "react";
import Btn from "./Btn";
// import AJAX from "../utils/AJAX";
import Spinner from "./Spinner";
// import { LoginAPI } from "../utils/Api";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";
import { modalConfig } from "../config/modalConfig";

export default function ActionConfirmModal({ state, dispatch }) {
  if (!state.isOpen) return null;

  const config = modalConfig[state.status] ?? {
    title: "Potwierdzenie",
    description: "Czy chcesz wykonać tę akcję?",
    confirmLabel: "OK",
    cancelLabel: "Anuluj",
  };

  //

  function handleConfirm() {
    state.onConfirm?.();
    dispatch({ type: "CLOSE" });
  }

  function handleCancel() {
    dispatch({ type: "CLOSE" });
  }

  //

  return (
    <div className="action-confirm-modal">
      <div className="action-confirm-modal__modal frame">
        <button
          type="button"
          className="action-confirm-modal__modal-btn_close"
          aria-label="Zamknij"
          onClick={handleCancel}
          // disabled={loading}
        >
          ×
        </button>
        <div className="action-confirm-modal__modal__content">
          <h2 className="action-confirm-modal__modal__content--header">
            {config.title}
          </h2>
          <p className="action-confirm-modal__modal__content--text">
            {config.description}
          </p>
          <div className="action-confirm-modal__modal__content__actions">
            <Btn onClick={handleConfirm}>{config.confirmLabel}</Btn>
            <Btn onClick={handleCancel}>{config.cancelLabel}</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
