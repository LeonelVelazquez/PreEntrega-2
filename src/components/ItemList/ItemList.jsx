<>
<FlexWrapper>
{data.map((item) => (
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