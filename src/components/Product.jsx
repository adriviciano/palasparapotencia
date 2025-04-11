import { Box, Image, Text, Link, Button, IconButton } from 'gestalt';

export default function Product({ name, price, url, imageUrl, description }) {
    return (
      <Box padding={2} shape="rounded" display="flex" direction="column" alignItems="center">
        <Link href={url} target="blank">
          <Box color="white" width="100%" height="318px">
            <Image
              naturalHeight={1}
              naturalWidth={1}
              fit="contain"
              alt={name}
              src={imageUrl}
            />
          </Box>
        </Link>
        <Box alignItems="center" justifyContent="between" direction="row" display="flex" padding={4}>
          <Text bold size="xl">
            <Link href={url} target="blank">{name}</Link>
          </Text>
        </Box>
        <Box paddingX={4}>
          <Text>${price}</Text>
        </Box>
        <Box marginBottom={4} padding={4}>
          <div className="product-caption">{description}</div>
        </Box>
        <Box shape="rounded">
          <Box display="flex" direction="row" justifyContent="between">
            <Box display="flex" direction="row" column={6} paddingX={2}>
              <Button
                accessibilityLabel={`Comprar ${name}`}
                color="gray"
                text="Comprar"
                size="md"
                onClick={() => window.open(url, "_blank")}
              />
            </Box>
            <Box display="flex">
              <Box paddingX={1}>
                <IconButton
                  accessibilityLabel="Compartir por correo"
                  icon="gmail"
                  iconColor="darkGray"
                  size="sm"
                  onClick={() => {
                    window.open(`mailto:?subject=${name}&body=${description} ${url}`, "_blank");
                  }}
                />
              </Box>
              <Box paddingX={1}>
                <IconButton
                  accessibilityLabel="Compartir en Facebook"
                  icon="facebook"
                  iconColor="darkGray"
                  size="sm"
                  onClick={() => {
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
                  }}
                />
              </Box>
              <Box paddingX={1}>
                <IconButton
                  accessibilityLabel="Compartir en Pinterest"
                  icon="pinterest"
                  iconColor="darkGray"
                  size="sm"
                  onClick={() => {
                    window.open(`https://pinterest.com/pin/create/button/?url=${url}&media=${imageUrl}&description=${description}`, "_blank");
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  