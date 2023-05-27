import {
  Box,
  Input,
  HStack,
  Button,
  Heading,
  useToast,
  FormLabel,
  PinInput,
  PinInputField,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";

const Payment = () => {
  const toast = useToast();
  const cancelRef = useRef();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [submittedotp, setsubmittedotp] = useState("");
  let [paymentdata, setpaymentdata] = useState({
    name: "",
    email: "",
    card: "",
    cvv: "",
    mon: "",
    year: "",
  });

  const otpmanage = () => {
    if (
      paymentdata.name !== "" &&
      paymentdata.email !== "" &&
      paymentdata.card !== "" &&
      paymentdata.card.length === 16 &&
      paymentdata.cvv !== "" &&
      paymentdata.cvv.length === 3 &&
      paymentdata.mon !== "" &&
      paymentdata.year !== ""
    ) {
      let otp = Math.floor(1000 + Math.random() * 9000);
      setOtp((e) => otp);
      //  console.log(otp);
      toast({
        title: `Enter this OTP ---> ${otp}`,
        position: "top-left",
        isClosable: true,
      });
      setTimeout(() => {
        onOpen();
      }, 1000);
    } else {
      toast({
        title: `Please Fill Complete Form`,
        status: "warning",
        isClosable: true,
      });
    }
  };

  const paymentformdata = (e) => {
    setpaymentdata({ ...paymentdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (Number(submittedotp) === otp) {
      onClose();
      toast({
        title: `Payment Successful`,
        status: "success",
        isClosable: true,
      });
      setOtp("");
      setsubmittedotp("");
      onClose();

      setTimeout(() => {
        navigate("/");
        toast({
          title: `Thank You So much for Trust`,
          status: "success",
          isClosable: true,
        });
      }, 2000);
    } else {
      toast({
        title: `Wrong OTP`,
        status: "error",
        isClosable: true,
      });
      setOtp("");
      setsubmittedotp("");
      onClose();
    }
  };

  return (
    <div
      style={{
        paddingTop: "25px",
        alignContent: "center",
      }}
    >
      <Heading textAlign={"center"} m={"10px"}>
        Payment
      </Heading>
      <Box
        m="auto"
        mb={"25px"}
        borderRadius={"15px"}
        border={"1px solid black"}
        w={{ base: "80%", md: "40%" }}
        p={{ base: "12px", md: "25px" }}
      >
        <FormLabel>
          Your name :
          <Input
            placeholder="Enter Your name"
            name="name"
            value={paymentdata.name}
            onChange={paymentformdata}
          />
        </FormLabel>
        <FormLabel>
          Email :
          <Input
            placeholder="Enter Your Email"
            name="email"
            value={paymentdata.email}
            onChange={paymentformdata}
          />
        </FormLabel>

        <FormLabel>
          Enter Card Number :{" "}
          <Input
            placeholder="Enter Card Number"
            value={paymentdata.card}
            name="card"
            onChange={paymentformdata}
          />
        </FormLabel>
        <FormLabel>
          CVV :{" "}
          <Input
            placeholder="Enter cvv code"
            name="cvv"
            value={paymentdata.cvv}
            onChange={paymentformdata}
          />
        </FormLabel>

        <FormLabel>
          Card Valid:
          <select
            name="mon"
            value={paymentdata.mon}
            onChange={paymentformdata}
            style={{ margin: "2px 5px", border: "1px solid black" }}
          >
            <option>MM</option>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select
            name="year"
            value={paymentdata.year}
            onChange={paymentformdata}
            style={{ margin: "2px 5px", border: "1px solid black" }}
          >
            <option>YY</option>
            <option value="23">2023</option>
            <option value="24">2024</option>
            <option value="25">2025</option>
            <option value="26">2026</option>
            <option value="27">2027</option>
            <option value="27">2028</option>
            <option value="27">2029</option>
            <option value="27">2030</option>
          </select>
        </FormLabel>
        <Button
          bg={"yellow.400"}
          fontWeight="bold"
          onClick={otpmanage}
          _hover={{ bg: "yellow.800", color: "white" }}
        >
          Get OTP
        </Button>
      </Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Enter OTP
            </AlertDialogHeader>

            <AlertDialogBody margin={"auto"}>
              <HStack>
                <PinInput
                  type="number"
                  value={submittedotp}
                  onChange={(value) => {
                    setsubmittedotp(value);
                  }}
                >
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleSubmit} ml={3}>
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};

export default Payment;
