import React from "react";

import {
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

import GalleryHeader from "components/Headers/GalleryHeader";
import GalleryIndex from  "./gallery-sections/GalleryIndex"

const Index = () => (
  <div>
    <GalleryHeader />
    <GalleryIndex />

  </div>
);

export default Index;
