import React from "react";
import RenderMovieDetailsDialog from "./MovieDetailsDialog";

export default function MovieDialog({ isOpen, selectedMovie, setOpenModal }) {
  if (isOpen) {
    return (
      <RenderMovieDetailsDialog
        setIsOpenModal={setOpenModal}
        isOpen={isOpen}
        selectedMovie={selectedMovie}
      />
    );
  }
  return null;
}
