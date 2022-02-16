const { join } = require( 'path' );
module.exports = {
    defaultValues:{
        $schema: 'https://schemas.wp.org/wp/5.9/block.json',
        folderName: 'src',
        title: 'My First Block',
        namespace: 'hello-block',
        editorScript: 'file:./index.js',
        editorStyle: 'file:./index.css',
        style: 'file:./style-index.css',
    },
    templatesPath: join( __dirname, 'plugin' ),
    blockTemplatesPath: join( __dirname, 'block' ),
};