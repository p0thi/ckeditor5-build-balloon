/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import LineHeight from 'ckeditor5-line-height-plugin';
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import fontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	BlockQuote,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,

	FontSize,
	FontColor,
	FontFamily,
	fontBackgroundColor,
	Alignment,

	LineHeight
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
	fontFamily: {
		options: [
			'Roboto',
			'Amatic SC',
			'Permanent Marker',
			'Fredericka the Great',
			'Londrina Sketch',
			'Henny Penny',
			'Eater',
		]
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
			'strikethrough',
			'|',
			'blockQuote',
			'insertTable',
			'|',
			'undo',
			'redo'
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
