// Generated with util/create-component.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { FallbackCurrencyLogoProps } from './FallbackCurrencyLogo.types';

const BAD_SRCS: { [url: string]: true } = {};

const FallbackCurrencyLogo: React.FC<FallbackCurrencyLogoProps> = ({ srcs, alt, size, style, ...rest }) => {
	const [, refresh] = useState<number>(0);

	const src: string | undefined = srcs.find((src) => !BAD_SRCS[src]);

	if (src)
		return (
			<StyledFallbackCurrencyLogoImage
				data-testid="FallbackCryptoLogo"
				alt={alt}
				src={src}
				size={size}
				className={rest.className}
				style={style}
				onError={() => {
					if (src) BAD_SRCS[src] = true;
					refresh((i) => i + 1);
				}}
			/>
		);

	return <Icon data-testid="FallbackCryptoLogo" name="helpCircle" size={size} {...rest} />;
};

export default FallbackCurrencyLogo;

export interface StyledFallbackCurrencyLogoImageProps {
	size: FallbackCurrencyLogoProps['size'];
}

const StyledFallbackCurrencyLogoImage = styled.img.attrs<StyledFallbackCurrencyLogoImageProps>((props) => ({
	size: props.size ?? '1rem'
}))<StyledFallbackCurrencyLogoImageProps>`
	height: ${({ size }) => size};
	width: ${({ size }) => size};
`;
