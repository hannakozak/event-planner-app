import { useState } from 'react';

export const useModal = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const toggleModalVisibility = () => {
        setIsModalVisible(!isModalVisible);
    };
    return { isModalVisible, toggleModalVisibility };
};