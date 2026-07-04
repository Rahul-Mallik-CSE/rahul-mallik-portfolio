"use client";

import SendEmail from "./SendEmail";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type SendEmailModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SendEmailModal = ({ open, onOpenChange }: SendEmailModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-white/10 bg-[#1d2222] text-white shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:max-w-2xl">
        <DialogHeader className="text-left">
          <DialogTitle className="text-2xl font-bold text-[#95EDFF] md:text-3xl">
            Send a message
          </DialogTitle>
          <DialogDescription className="max-w-xl text-sm text-white/70 md:text-base">
            Share your name, email, phone number, and project details. The form
            sends your message to both of my inboxes automatically.
          </DialogDescription>
        </DialogHeader>

        <SendEmail />
      </DialogContent>
    </Dialog>
  );
};

export default SendEmailModal
