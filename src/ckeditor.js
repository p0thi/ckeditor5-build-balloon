/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import LineHeight from 'ckeditor5-line-height-plugin';
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

export default class BalloonEditor extends BalloonEditorBase { }

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	// UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Underline,
	CKFinder,
	// EasyImage,

	FontSize,
	FontColor,
	FontFamily,
	FontBackgroundColor,
	Alignment,

	Image,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,

	Indent,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,

	LineHeight,
	Base64UploadAdapter,
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	fontColor: {
		colors: [
			{
				color: 'black',
				label: 'Schwarz'
			},
			{
				color: 'white',
				label: 'Weiß',
				hasBorder: true
			},
			{
				color: '#d4003c',
				label: 'Rot'
			},
			{
				color: '#f99e1d',
				label: 'Orange'
			},
			{
				color: 'grey',
				label: 'Grau'
			}
		],
		documentColors: 0
	},
	fontBackgroundColor: {
		colors: [
			{
				color: 'black',
				label: 'Schwarz'
			},
			{
				color: 'white',
				label: 'Weiß',
				hasBorder: true
			},
			{
				color: '#d4003c',
				label: 'Rot'
			},
			{
				color: '#f99e1d',
				label: 'Orange'
			},
			{
				color: 'grey',
				label: 'Grau'
			},
			{
				color: 'Brown',
				label: 'Braun'
			},
			{
				color: 'DarkBlue',
				label: 'Dunkelblau'
			},
			{
				color: 'Gold',
				label: 'Gold'
			},
			{
				color: 'Indigo',
				label: 'Indigo'
			},
			{
				color: 'LightGrey',
				label: 'Hellgrau'
			},
			{
				color: 'Navy',
				label: 'Navy'
			},
			{
				color: 'SeaGreen',
				label: 'Meergrün'
			},
			{
				color: 'RoyalBlue',
				label: 'Königsblau'
			},
			{
				color: 'PaleGreen',
				label: 'Blassgrün'
			},
			{
				color: 'LimeGreen',
				label: 'Limette'
			},
			{
				color: 'Green',
				label: 'Grün'
			},
			{
				color: 'FireBrick',
				label: 'Feuer'
			},
			{
				color: 'Yellow',
				label: 'Gelb'
			},
		],
		columns: 5,
		documentColors: 0
	},
	fontFamily: {
		options: [
			'default',
			'Roboto',
			'Chewy',
			'Amatic SC',
			'Permanent Marker',
			'Fredericka the Great',
			'Londrina Sketch',
			'Henny Penny',
			'Eater',
		]
	},
	fontSize: {
		options: [
			{
				name: 'Winzig',
				size: '0.25em'
			},
			{
				name: 'Sehr Klein',
				size: '0.5em'
			},
			{
				name: 'Klein',
				size: '0.75em'
			},
			{
				name: 'Normal',
				size: '1em'
			},
			{
				name: 'Größer',
				size: '1.4em'
			},
			{
				name: 'Groß',
				size: '1.8em'
			},
			{
				name: 'Sehr groß',
				size: '2.2em'
			},
			{
				name: 'Riesig',
				size: '2.6em'
			},
		].map( item => {
			return {
				model: item.name,
				title: item.name,
				view: {
					name: 'span',
					priority: 7,
					styles: { 'font-size': item.size }
				}
			};
		} )
	},
	lineHeight: {
		options: [ 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5 ]
	},
	toolbar: {
		items: [
			'fontFamily',
			'|',
			'fontSize',
			'alignment',
			'lineHeight',
			'|',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'insertTable',
			'mediaEmbed',
			'|',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:left', 'imageStyle:full', 'imageStyle:right',
		],
		styles: [
			{ name: 'left', icon: 'left', title: 'My side style', className: 'image-style-align-left' },
			// This will only customize the icon of the "full" style.
			// Note: 'right' is one of default icons provided by the feature.
			{ name: 'full', icon: 'full' },

			// This will customize the icon, title and CSS class of the default "side" style.
			{ name: 'right', icon: 'right', title: 'My side style', className: 'image-style-align-right' }
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'de'
};
