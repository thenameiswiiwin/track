import { NextApiRequest, NextApiResponse } from "next";
import { validateRoute } from "../../lib/auth";

type ValidateRouteProps = {
  req: NextApiRequest;
  res: NextApiResponse;
  user: { id: number };
};

export default validateRoute(({ req, res, user }: ValidateRouteProps) => {
  res.json(user);
});
