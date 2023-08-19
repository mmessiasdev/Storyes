import React, { useContext } from "react";
import { Container, ContainerHeader } from "../../widgets/container";
import Switch, { ReactSwitchProps } from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { FaMoon } from 'react-icons/fa';


interface props{
    toggleTheme: VoidFunction;
}
    

const ThemeContainer = ({ toggleTheme }: props) => {
    const { colors, title } = useContext(ThemeContext);
    return (
        <>
            <ContainerHeader data-aos-duration='1500'>
                <Container pad='0px 10px'>
                    <FaMoon />
                </Container>
                <Switch
                    onChange={toggleTheme}
                    checked={title == 'light'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={30}
                    handleDiameter={20}
                    offColor={shade(0.15, colors.background)}
                    onColor={shade(0, colors.background)}
                    onHandleColor={shade(0, colors.text)}
                    offHandleColor={shade(0, colors.text)}
                />
            </ContainerHeader>


        </>
    )
};

export default ThemeContainer;