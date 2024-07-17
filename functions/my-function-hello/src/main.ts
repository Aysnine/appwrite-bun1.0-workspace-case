import { greetings } from "@my-org/my-package-foo";

export default async ({ req, res, log, error }: any) => {
  res.send({
    message: greetings().message,
  });
};
