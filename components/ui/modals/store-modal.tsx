"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoryModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Add new store to manage products and categories"
      isOpen={false}
      onClose={() => {}}
    >
      Future Create Store Form
    </Modal>
  );
};
