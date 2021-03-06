import React from 'react';
import ItemCard from '../ItemCard';
import Masonry from 'react-masonry-component';
import './styles.css';

const ItemsCardList = props => (
    <Masonry
        className={'my-gallery-class'}
        elementType={'ul'} // default 'div'
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
    >
        {props.itemsData.map((item, index) => (
            <li key={index}>
                <ItemCard itemsData={item} />
            </li>
        ))}
    </Masonry>
);
export default ItemsCardList;
