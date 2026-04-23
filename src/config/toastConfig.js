import { Slide } from "react-toastify";

export const toastConfig = {
  position: "bottom-right",
  autoClose: 2000, // Zniknie po x sekundy
  hideProgressBar: true, // Brak animowanego paska na dole
  closeOnClick: true,
  pauseOnHover: false, // Nie zatrzymuj odliczania po najechaniu myszką
  theme: "dark",
  transition: Slide,
  style: {
    backgroundColor: "#2f3234",
    color: "#d6f5d6",
    borderRadius: "1rem",
    border: "0.1rem solid #52d552",
    fontSize: "1.8rem",
    boxShadow: "0 0.4rem 1.2rem rgba(0,0,0,0.5)",
    // marginBottom: "1.2rem",
    maxWidth: "calc(100vw - 2.4rem)",
  },
};
