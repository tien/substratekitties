import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { useNativeTokenAmountFromPlanck } from "@reactive-dot/react";
import { KittyAvatar } from "./kitty-avatar";
import { SetPriceForm } from "./set-price-form";
import { TransferKittyForm } from "./transfer-kitty-form";

interface Props {
  dna: string;
  owner: string;
  price?: bigint;
  isOwner: boolean;
}

export function KittyCard({ dna, owner, price, isOwner }: Props) {
  const nativeTokenAmountFromPlanck = useNativeTokenAmountFromPlanck();
  return (
    <Card size="2">
      <Flex direction="column" gap="2">
        <KittyAvatar dna={dna} />
        <Heading as="h3" size="4">
          Kitty DNA: {dna}
        </Heading>
        <Text>Owner: {owner}</Text>
        <Text>
          Price:{" "}
          {price === undefined
            ? "Not for sale"
            : nativeTokenAmountFromPlanck(price).toLocaleString()}
        </Text>
        {isOwner && (
          <>
            <TransferKittyForm kittyDna={dna} />
            <SetPriceForm kittyDna={dna} currentPrice={price} />
          </>
        )}
      </Flex>
    </Card>
  );
}
