import { Box } from '@chakra-ui/react';
import { PricingShowcase } from '../components/pricing';
import { useQuery } from '../gqty';

export function Index() {
  const query = useQuery();

  const packs = query.Academy_Packs().map((pack) => ({
    projects: pack.projects().map((project) => ({
      description: project.Project_Definition_id().description,
      features: project
        .Project_Definition_id()
        .features()
        .map((feature) => ({
          ...feature,
        })),
    })),
    price: pack.price,
  }));

  console.log(packs);
  return (
    <Box p={6}>
      <PricingShowcase />
    </Box>
  );
}

export default Index;
