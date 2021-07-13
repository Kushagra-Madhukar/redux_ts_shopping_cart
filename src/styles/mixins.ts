import { css } from 'styled-components'

type SizeProps = {
  height: string
  maxHeight: string
  maxWidth: string
  width: string
}

type InputProps = {
  width?: string
  fontSize?: string
  color?: string
  background?: string
  padding?: string
  weight?: number | string
}

export const Size = ({ height, maxHeight, maxWidth, width }: SizeProps) => css`
  block-size: ${height};
  inline-size: ${width};
  max-block-size: ${maxHeight};
  max-inline-size: ${maxWidth};

  @supports not (block-size: ${height}) {
    height: ${height};
    max-height: ${maxHeight};
  }

  @supports not (inline-size: ${width}) {
    max-width: ${maxWidth};
    width: ${width};
  }
`;

export const InputField = ({width = '80px', fontSize = '1rem', color = '#000', background = '#fff', padding = '0.2em', weight = 500}: InputProps) => css`
  outline: none;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: max(5px, 0.25em);
  width: ${width};
  font-size: ${fontSize};
  color: ${color};
  background-color: ${background};
  padding: ${padding};
  font-weight: ${weight};
`