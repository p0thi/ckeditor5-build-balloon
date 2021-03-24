/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import LineHeight from 'ckeditor5-line-height-plugin';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';

class Editor extends BalloonEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	AutoImage,
	Autoformat,
	BlockQuote,
	Bold,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Image,
	ImageResize,
	ImageStyle,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	ListStyle,
	MediaEmbed,
	Paragraph,
	TextTransformation,

	Underline,
	Strikethrough,
	PasteFromOffice,
	Table,
	TableToolbar,
	//
	LineHeight
];

Editor.defaultConfig = {
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
			'Eater'
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
			}
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
		shouldNotGroupWhenFull: true,
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
			'mediaEmbed',
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

export default Editor;
