import styled from 'styled-components';

export const Button = styled.button`
	margin: 0.3125em;
	padding: 0.625em 1.1em;
	transition: box-shadow .1s;
	box-shadow: 0 0 0 3px transparent;
	font-weight: 500;
	&:not([disabled]) {
		cursor: pointer;
	}
	border: 0;
	border-radius: 0.25em;
	background: initial;
	color: #fff;
	font-size: 1em;
`;

export const DenyButton = styled(Button)`
    background-color: ${(props) => props.theme.palette.error.main.color};
    color:${(props) => props.theme.palette.error.main.contrastText};
    &:hover {
        background-color:${(props) => props.theme.palette.error.dark.color};
        color:${(props) => props.theme.palette.error.dark.contrastText};
    }
    &:active {
        background-color:${(props) => props.theme.palette.error.dark.color};
        color:${(props) => props.theme.palette.error.dark.contrastText};
    }
`;

export const ConfirmButton = styled(Button)`
    background-color: ${(props) => props.theme.palette.primary.main.color};
    color:${(props) => props.theme.palette.primary.main.contrastText};
    &:hover {
        background-color:${(props) => props.theme.palette.primary.dark.color};
        color:${(props) => props.theme.palette.primary.dark.contrastText};
    }
    &:active {
        background-color:${(props) => props.theme.palette.primary.dark.color};
        color:${(props) => props.theme.palette.primary.dark.contrastText};
    }
`;

export const SuccessButton = styled(Button)`
    background-color: ${(props) => props.theme.palette.success.main.color};
    color:${(props) => props.theme.palette.success.main.contrastText};
    &:hover {
        background-color:${(props) => props.theme.palette.success.dark.color};
        color:${(props) => props.theme.palette.success.dark.contrastText};
    }
    &:active {
        background-color:${(props) => props.theme.palette.success.dark.color};
        color:${(props) => props.theme.palette.success.dark.contrastText};
    }
`;

export const CancelButton = styled(Button)`
    background-color: ${(props) => props.theme.palette.cancel.main.color};
    color:${(props) => props.theme.palette.cancel.main.contrastText};
    &:hover {
        background-color:${(props) => props.theme.palette.cancel.dark.color};
        color:${(props) => props.theme.palette.cancel.dark.contrastText};
    }
    &:active {
        background-color:${(props) => props.theme.palette.cancel.dark.color};
        color:${(props) => props.theme.palette.cancel.dark.contrastText};
    }
`;
