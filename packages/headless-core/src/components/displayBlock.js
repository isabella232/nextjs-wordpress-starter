import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

/**
 * Dynamically display block component.
 *
 * @see https://nextjs.org/docs/advanced-features/dynamic-import
 * @author WebDevStudios
 * @param  {object}  block The block data.
 * @param  {number}  index The block index.
 * @return {Element}       A block component.
 */
export function displayBlock(block, index) {
  const {attributes, name, innerBlocks} = block

  switch (name) {
    case 'core/button':
      const {BlockButton} = dynamic(() => import('./blocks/BlockButton'))
      return <BlockButton {...attributes} key={index} />

    case 'core/buttons':
      const {BlockButtons} = dynamic(() => import('./blocks/BlockButtons'))
      return (
        <BlockButtons
          options={attributes}
          innerBlocks={innerBlocks}
          key={index}
        />
      )

    case 'core/code':
    case 'core/preformatted':
      const {BlockCode} = dynamic(() => import('./blocks/BlockCode'))
      return <BlockCode {...attributes} key={index} />

    case 'core/columns':
      const {BlockColumns} = dynamic(() => import('./blocks/BlockColumns'))
      return (
        <BlockColumns
          columns={attributes}
          innerBlocks={innerBlocks}
          key={index}
        />
      )

    case 'core/cover':
      const {BlockCover} = dynamic(() => import('./blocks/BlockCover'))
      return (
        <BlockCover media={attributes} innerBlocks={innerBlocks} key={index} />
      )

    case 'core/embed':
      const {BlockEmbed} = dynamic(() => import('./blocks/BlockEmbed'))
      return <BlockEmbed {...attributes} key={index} />

    case 'core/gallery':
      const {BlockImageGallery} = dynamic(() =>
        import('./blocks/BlockImageGallery')
      )
      return <BlockImageGallery {...attributes} key={index} />

    case 'core/heading':
      const {BlockHeadings} = dynamic(() => import('./blocks/BlockHeadings'))
      return <BlockHeadings {...attributes} key={index} />

    case 'core/image':
      const {BlockImage} = dynamic(() => import('./blocks/BlockImage'))
      return <BlockImage {...attributes} key={index} />

    case 'core/list':
      const {BlockList} = dynamic(() => import('./blocks/BlockList'))
      return <BlockList {...attributes} key={index} />

    case 'core/media-text':
      const {BlockMediaText} = dynamic(() => import('./blocks/BlockMediaText'))
      return (
        <BlockMediaText
          media={attributes}
          innerBlocks={innerBlocks}
          key={index}
        />
      )

    case 'core/paragraph':
      const {BlockParagraph} = dynamic(() => import('./blocks/BlockParagraph'))
      return <BlockParagraph {...attributes} key={index} />

    case 'core/pullquote':
      const {BlockPullQuote} = dynamic(() => import('./blocks/BlockPullQuote'))
      return <BlockPullQuote {...attributes} key={index} />

    case 'core/quote':
      const {BlockQuote} = dynamic(() => import('./blocks/BlockQuote'))
      return <BlockQuote {...attributes} key={index} />

    case 'core/separator':
      const {BlockSeparator} = dynamic(() => import('./blocks/BlockSeparator'))
      return <BlockSeparator {...attributes} key={index} />

    case 'core/spacer':
      const {BlockSpacer} = dynamic(() => import('./blocks/BlockSpacer'))
      return <BlockSpacer {...attributes} key={index} />

    case 'core/table':
      const {BlockTable} = dynamic(() => import('./blocks/BlockTable'))
      return <BlockTable {...attributes} key={index} />

    default:
      return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>
  }
}

displayBlock.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}