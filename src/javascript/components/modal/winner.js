import showModal from './modal';
import { createFighterImage } from '../fighterPreview';

export default function showWinnerModal(fighter) {
    const image = createFighterImage(fighter);
    const winnerModalContent = {
        title: `${fighter.name} wins!`,
        bodyElement: image
    };

    showModal(winnerModalContent);
}
