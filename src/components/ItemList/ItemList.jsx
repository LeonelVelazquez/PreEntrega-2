import Cards from "../Cards/Cards";
import FlexWrapper from "../flexWrapper/flexWrapper";

import React from "react";

const ItemList = ({ item }) => {
    return (
        <>
            <FlexWrapper>
                {item.map((item) => (
                    <Cards
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        detail={item.detail}
                        imgurl={item.imgurl}
                    />
                ))}
            </FlexWrapper>
        </>
    );
};

export default ItemList;