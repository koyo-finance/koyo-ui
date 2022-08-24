// Generated with util/create-component.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../atoms';
import { FallbackCryptoLogoProps } from './FallbackCryptoLogo.types';

const BAD_SRCS: { [url: string]: true } = {};

const FallbackCryptoLogo: React.FC<FallbackCryptoLogoProps> = ({ srcs, alt, size, ...rest }) => {
	const [, refresh] = useState<number>(0);

	const src: string | undefined = srcs.find((src) => !BAD_SRCS[src]);

	if (src)
		return (
			<StyledFallbackCryptoLogoImage
				data-testid="FallbackCryptoLogo"
				alt={alt}
				src={src}
				size={size}
				className={rest.className}
				onError={() => {
					if (src) BAD_SRCS[src] = true;
					refresh((i) => i + 1);
				}}
			/>
		);

	return <Icon data-testid="FallbackCryptoLogo" name="helpCircle" size={size} {...rest} />;
};

export default FallbackCryptoLogo;

export interface StyledFallbackCryptoLogoImageProps {
	size: FallbackCryptoLogoProps['size'];
}

const StyledFallbackCryptoLogoImage = styled.img.attrs<StyledFallbackCryptoLogoImageProps>((props) => ({
	size: props.size ?? '1rem'
}))<StyledFallbackCryptoLogoImageProps>`
	height: ${({ size }) => size};
	width: ${({ size }) => size};
`;
