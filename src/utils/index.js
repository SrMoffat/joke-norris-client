import toast from "toastr";
import "toastr/build/toastr.min.css";

toast.options = {
  progressBar: false,
  closeButton: true,
  preventDuplicates: true,
  positionClass: 'toast-top-center',
};
export const successMessage = message =>  toast.success(message);
export const errorMessage = message =>  toast.error(message);
export const capitalizeFirstLetter = word => word.slice(0, 1).toUpperCase() + word.slice(1);