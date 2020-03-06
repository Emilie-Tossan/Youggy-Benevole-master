import React from 'react';
import Svg, {
	G,
	Path,
	Circle,
	ClipPath,
	Image,
	Defs,
	Text,
	TSpan
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, filter, title */
import AjoutPhoto from './ajout-photo';

const PhotoProfil = props => {
	const width = props.style && props.style.width ? props.style.width : 132;
	const height = props.style && props.style.height ? props.style.height : 82;
	const style = props.style ? { ...props.style } : {};
	const { profil, displayText } = props;

	return (
		<Svg
			id="prefix__Layer_1"
			x={0}
			y={0}
			viewBox="0 0 132 82"
			//xmlSpace="preserve"
			//enableBackground="new 0 0 132 82"
			width={width}
			height={height}
			preserveAspectRatio="xMinYMin slice"
			{...style}
			style={{
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 1
				},
				shadowOpacity: 0.22,
				shadowRadius: 2.22
			}}
		>
			<G id="prefix__Page-1">
				<G id="prefix__photo-profil" transform="translate(-6 -6)">
					<G
						id="prefix__aile-gauche"
						transform="scale(1 -1) rotate(-47 -23.946 -11.137)"
						fill="#E8E8E8"
						y={1}
						x={1}
					>
						<G
							id="prefix__image"
							transform="matrix(1 0 0 -1 0 29.572)"
						>
							<G id="prefix__Fill-1">
								<G filter="url(#prefix__filter-2)">
									<Path
										id="prefix__path-1_1_"
										className="prefix__st1"
										d="M55.4 13.2c1.2.3 2.4.7 3.7 1l.5-3.2L20.9.5c-1.2-.3-3.2-.6-3.7 0C12.6 6 6.9 9.6 0 12.5c2.5 2.3 5 4.7 7.9 5.7 3 1.1 6.5.9 9.9 1.3-2.7 1.7-5.5 3.5-8.3 5.3 7.4 4.3 16.2 1.3 23.4-7.5-1.4 3.6-2.8 7.1-4.4 11.1 7.3-.2 11.2-4.3 13.7-10.3.4.1.7.2 1.1.4-.4 2.6-.8 5.1-1.2 8.1 5-.7 6.9-4.4 8.8-8 .7 1.2 1.2 2.1 2.2 4 .9-3.8 1.6-6.5 2.3-9.4"
									/>
								</G>
								<Path
									className="prefix__st1"
									d="M55.4 13.2c1.2.3 2.4.7 3.7 1l.5-3.2L20.9.5c-1.2-.3-3.2-.6-3.7 0C12.6 6 6.9 9.6 0 12.5c2.5 2.3 5 4.7 7.9 5.7 3 1.1 6.5.9 9.9 1.3-2.7 1.7-5.5 3.5-8.3 5.3 7.4 4.3 16.2 1.3 23.4-7.5-1.4 3.6-2.8 7.1-4.4 11.1 7.3-.2 11.2-4.3 13.7-10.3.4.1.7.2 1.1.4-.4 2.6-.8 5.1-1.2 8.1 5-.7 6.9-4.4 8.8-8 .7 1.2 1.2 2.1 2.2 4 .9-3.8 1.6-6.5 2.3-9.4"
								/>
							</G>
						</G>
					</G>
					<G
						id="prefix__aile-gauche"
						transform="scale(1 -1) rotate(-47 -23.946 -11.137)"
						fill="#fff"
						stroke="#E8E8E8"
						strokeWidth={0.5}
						strokeMiterlimit={10}
					>
						<G
							id="prefix__image"
							transform="matrix(1 0 0 -1 0 29.572)"
						>
							<G id="prefix__Fill-1">
								<G filter="url(#prefix__filter-2)">
									<Path
										id="prefix__path-1_1_"
										className="prefix__st1"
										d="M55.4 13.2c1.2.3 2.4.7 3.7 1l.5-3.2L20.9.5c-1.2-.3-3.2-.6-3.7 0C12.6 6 6.9 9.6 0 12.5c2.5 2.3 5 4.7 7.9 5.7 3 1.1 6.5.9 9.9 1.3-2.7 1.7-5.5 3.5-8.3 5.3 7.4 4.3 16.2 1.3 23.4-7.5-1.4 3.6-2.8 7.1-4.4 11.1 7.3-.2 11.2-4.3 13.7-10.3.4.1.7.2 1.1.4-.4 2.6-.8 5.1-1.2 8.1 5-.7 6.9-4.4 8.8-8 .7 1.2 1.2 2.1 2.2 4 .9-3.8 1.6-6.5 2.3-9.4"
									/>
								</G>
								<Path
									className="prefix__st1"
									d="M55.4 13.2c1.2.3 2.4.7 3.7 1l.5-3.2L20.9.5c-1.2-.3-3.2-.6-3.7 0C12.6 6 6.9 9.6 0 12.5c2.5 2.3 5 4.7 7.9 5.7 3 1.1 6.5.9 9.9 1.3-2.7 1.7-5.5 3.5-8.3 5.3 7.4 4.3 16.2 1.3 23.4-7.5-1.4 3.6-2.8 7.1-4.4 11.1 7.3-.2 11.2-4.3 13.7-10.3.4.1.7.2 1.1.4-.4 2.6-.8 5.1-1.2 8.1 5-.7 6.9-4.4 8.8-8 .7 1.2 1.2 2.1 2.2 4 .9-3.8 1.6-6.5 2.3-9.4"
								/>
							</G>
						</G>
					</G>

					<G id="prefix__aile-droite" fill="#E8E8E8" y={1} x={-0.5}>
						<G
							filter="url(#prefix__filter-4)"
							transform="scale(-1 1) rotate(47 -61.94 -139.665)"
						>
							<Path
								id="prefix__path-3_1_"
								className="prefix__st1"
								d="M55.4 13.2c1.2.3 2.4.7 3.7 1l.5-3.2L20.9.5c-1.2-.3-3.2-.6-3.7 0C12.6 6 6.9 9.6 0 12.5c2.5 2.3 5 4.7 7.9 5.7 3 1.1 6.5.9 9.9 1.3-2.7 1.7-5.5 3.5-8.3 5.3 7.4 4.3 16.2 1.3 23.4-7.5-1.4 3.6-2.8 7.1-4.4 11.1 7.3-.2 11.2-4.3 13.7-10.3.4.1.7.2 1.1.4-.4 2.6-.8 5.1-1.2 8.1 5-.7 6.9-4.4 8.8-8 .7 1.2 1.2 2.1 2.2 4 .9-3.8 1.6-6.5 2.3-9.4"
							/>
						</G>
						<Path
							className="prefix__st1"
							d="M55.4 13.2c1.2.3 2.4.7 3.7 1l.5-3.2L20.9.5c-1.2-.3-3.2-.6-3.7 0C12.6 6 6.9 9.6 0 12.5c2.5 2.3 5 4.7 7.9 5.7 3 1.1 6.5.9 9.9 1.3-2.7 1.7-5.5 3.5-8.3 5.3 7.4 4.3 16.2 1.3 23.4-7.5-1.4 3.6-2.8 7.1-4.4 11.1 7.3-.2 11.2-4.3 13.7-10.3.4.1.7.2 1.1.4-.4 2.6-.8 5.1-1.2 8.1 5-.7 6.9-4.4 8.8-8 .7 1.2 1.2 2.1 2.2 4 .9-3.8 1.6-6.5 2.3-9.4"
							transform="scale(-1 1) rotate(47 -61.94 -139.665)"
						/>
					</G>
					<G
						id="prefix__aile-droite"
						fill="#fff"
						stroke="#E8E8E8"
						strokeWidth={0.5}
						strokeMiterlimit={10}
					>
						<G
							filter="url(#prefix__filter-4)"
							transform="scale(-1 1) rotate(47 -61.94 -139.665)"
						>
							<Path
								id="prefix__path-3_1_"
								className="prefix__st1"
								d="M55.4 13.2c1.2.3 2.4.7 3.7 1l.5-3.2L20.9.5c-1.2-.3-3.2-.6-3.7 0C12.6 6 6.9 9.6 0 12.5c2.5 2.3 5 4.7 7.9 5.7 3 1.1 6.5.9 9.9 1.3-2.7 1.7-5.5 3.5-8.3 5.3 7.4 4.3 16.2 1.3 23.4-7.5-1.4 3.6-2.8 7.1-4.4 11.1 7.3-.2 11.2-4.3 13.7-10.3.4.1.7.2 1.1.4-.4 2.6-.8 5.1-1.2 8.1 5-.7 6.9-4.4 8.8-8 .7 1.2 1.2 2.1 2.2 4 .9-3.8 1.6-6.5 2.3-9.4"
							/>
						</G>
						<Path
							className="prefix__st1"
							d="M55.4 13.2c1.2.3 2.4.7 3.7 1l.5-3.2L20.9.5c-1.2-.3-3.2-.6-3.7 0C12.6 6 6.9 9.6 0 12.5c2.5 2.3 5 4.7 7.9 5.7 3 1.1 6.5.9 9.9 1.3-2.7 1.7-5.5 3.5-8.3 5.3 7.4 4.3 16.2 1.3 23.4-7.5-1.4 3.6-2.8 7.1-4.4 11.1 7.3-.2 11.2-4.3 13.7-10.3.4.1.7.2 1.1.4-.4 2.6-.8 5.1-1.2 8.1 5-.7 6.9-4.4 8.8-8 .7 1.2 1.2 2.1 2.2 4 .9-3.8 1.6-6.5 2.3-9.4"
							transform="scale(-1 1) rotate(47 -61.94 -139.665)"
						/>
					</G>
					<G id="prefix__fond" transform="translate(39 20)">
						<Circle
							cx={33.5}
							cy={33.5}
							r={33.5}
							strokeWidth={0.1}
							stroke="black"
							fill="#fff"
							id="prefix__oval"
						/>
					</G>
					<G id="prefix__cadre">
						<Defs>
							<ClipPath id="mask_photo">
								<Circle
									cx={33.5}
									cy={33.5}
									r={33.5}
									fill="none"
									stroke="#F0F0F0"
									strokeWidth={0.5}
									transform="translate(39 20)"
								/>
							</ClipPath>
						</Defs>
						{(profil && (
							<Image
								y={15}
								x={35}
								width={75}
								height={75}
								href={profil}
								clipPath="url(#mask_photo)"
							/>
						)) || (
							<G transform="translate(51 52)">
								{displayText && (
									<Text
										fill="#000"
										fontSize="7"
										fontWeight="regular"
										x="9"
										y="-12"
										strokeWidth="0"
									>
										j'ajoute{' '}
										{!props.text ? (
											<TSpan x="5" dy="9">
												ma photo
											</TSpan>
										) : (
											<TSpan x="10" dy="9">
												le logo
											</TSpan>
										)}
									</Text>
								)}
								<AjoutPhoto
									style={{
										width: 42.428,
										height: 30
									}}
								/>
							</G>
						)}
					</G>
				</G>
			</G>
		</Svg>
	);
};

export default PhotoProfil;
