import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

export function FoodCard({food,setShoppingcart}) {
  return (
    <Card onClick={()=>{setShoppingcart(food)}} className="w-full max-w-[16rem] m-2">
      <CardHeader>
        <img
          src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Rice"
        />
       

      </CardHeader>
      <CardBody>
        <div className=" flex items-center justify-center">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {food.name} {food.RS}
          </Typography>
        </div>

      </CardBody>
      <CardFooter className="pt-3 w-full flex">
        <Button className="flex w-full space-x-3 justify-center items-center" size="lg" fullWidth={true}>
          <Typography color="white">
            Buy
          </Typography>
          <Typography color="white">
          {food.RS}
          </Typography>
        </Button>
      </CardFooter>
    </Card>
  );
}