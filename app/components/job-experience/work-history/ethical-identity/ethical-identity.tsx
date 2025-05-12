import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function EthicalIdentity() {
  return (
    <>
      <Typography variant="h4" noWrap component={"h4"}>
        Software Engineer
      </Typography>
      <Typography
        variant="h5"
        noWrap
        component={"h5"}
        sx={{
          ml: 10,
          textDecoration: "underline",
          color: "rgb(13, 202, 240)",
          display: "inline",
        }}
      >
        at Ethical Identity
      </Typography>
      <Typography sx={{ display: "inline", paddingLeft: 2, color: "gray" }}>
        Dec 2019 to Jan 2020
      </Typography>

      <Box>
        <List>
          <ListItem>
            <Typography>
              Led a small engineering team in developing a mobile point-of-sale
              (POS) application for firearm retailers, serving as a proof of
              concept for the company’s blockchain-based encrypted identity
              platform. The system enabled secure identity verification in
              compliance with strict regulatory environments.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Delivered a functioning MVP under tight startup constraints by
              applying pragmatic design and development decisions, enabling
              investor demonstrations and early product validation.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Designed and built a domain-specific adapter layer that connected
              application logic to the company’s proprietary encrypted
              blockchain. This included modeling identity data, encrypting and
              decrypting payloads, and ensuring application-level data
              integrity.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Developed secure authentication and authorization workflows
              tailored to blockchain-based identity management, laying the
              foundation for future role-based access control and audit
              compliance
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Helped implement a custom blockchain-integrated storage layer
              using CouchDB, ensuring full data encryption at rest. Built an
              auditable decryption mechanism that enabled selective data access
              through a dedicated audit encryption key, with each decryption
              event generating a verifiable audit trail.
            </Typography>
          </ListItem>{" "}
        </List>
      </Box>
    </>
  );
}
