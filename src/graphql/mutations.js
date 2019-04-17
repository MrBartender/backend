// eslint-disable
// this is an auto generated file. This will be overwritten

export const createVendor = `mutation CreateVendor($input: CreateVendorInput!) {
  createVendor(input: $input) {
    id
    semanticId
    name
    website
    profilePic {
      icon {
        bucket
        key
        access
      }
      small {
        bucket
        key
        access
      }
      large {
        bucket
        key
        access
      }
      banner {
        bucket
        key
        access
      }
    }
    collections {
      items {
        id
        name
      }
      nextToken
    }
    devices {
      items {
        id
        status
        name
        semantic_id
        pourCode
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
  }
}
`;
export const updateVendor = `mutation UpdateVendor($input: UpdateVendorInput!) {
  updateVendor(input: $input) {
    id
    semanticId
    name
    website
    profilePic {
      icon {
        bucket
        key
        access
      }
      small {
        bucket
        key
        access
      }
      large {
        bucket
        key
        access
      }
      banner {
        bucket
        key
        access
      }
    }
    collections {
      items {
        id
        name
      }
      nextToken
    }
    devices {
      items {
        id
        status
        name
        semantic_id
        pourCode
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
  }
}
`;
export const deleteVendor = `mutation DeleteVendor($input: DeleteVendorInput!) {
  deleteVendor(input: $input) {
    id
    semanticId
    name
    website
    profilePic {
      icon {
        bucket
        key
        access
      }
      small {
        bucket
        key
        access
      }
      large {
        bucket
        key
        access
      }
      banner {
        bucket
        key
        access
      }
    }
    collections {
      items {
        id
        name
      }
      nextToken
    }
    devices {
      items {
        id
        status
        name
        semantic_id
        pourCode
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
  }
}
`;
export const createCollection = `mutation CreateCollection($input: CreateCollectionInput!) {
  createCollection(input: $input) {
    id
    name
    drinks {
      items {
        id
        name
        price
        description
        instructions
      }
      nextToken
    }
    vendor {
      id
      semanticId
      name
      website
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const updateCollection = `mutation UpdateCollection($input: UpdateCollectionInput!) {
  updateCollection(input: $input) {
    id
    name
    drinks {
      items {
        id
        name
        price
        description
        instructions
      }
      nextToken
    }
    vendor {
      id
      semanticId
      name
      website
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const deleteCollection = `mutation DeleteCollection($input: DeleteCollectionInput!) {
  deleteCollection(input: $input) {
    id
    name
    drinks {
      items {
        id
        name
        price
        description
        instructions
      }
      nextToken
    }
    vendor {
      id
      semanticId
      name
      website
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
  }
}
`;
export const createRating = `mutation CreateRating($input: CreateRatingInput!) {
  createRating(input: $input) {
    id
    reviewer {
      id
      name
      orders {
        nextToken
      }
      reviews {
        nextToken
      }
    }
    recipe {
      id
      name
      price
      description
      instructions
      components {
        ratio
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
    score
    comment
  }
}
`;
export const updateRating = `mutation UpdateRating($input: UpdateRatingInput!) {
  updateRating(input: $input) {
    id
    reviewer {
      id
      name
      orders {
        nextToken
      }
      reviews {
        nextToken
      }
    }
    recipe {
      id
      name
      price
      description
      instructions
      components {
        ratio
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
    score
    comment
  }
}
`;
export const deleteRating = `mutation DeleteRating($input: DeleteRatingInput!) {
  deleteRating(input: $input) {
    id
    reviewer {
      id
      name
      orders {
        nextToken
      }
      reviews {
        nextToken
      }
    }
    recipe {
      id
      name
      price
      description
      instructions
      components {
        ratio
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
    score
    comment
  }
}
`;
export const createRecipe = `mutation CreateRecipe($input: CreateRecipeInput!) {
  createRecipe(input: $input) {
    id
    name
    price
    description
    instructions
    profilePic {
      icon {
        bucket
        key
        access
      }
      small {
        bucket
        key
        access
      }
      large {
        bucket
        key
        access
      }
      banner {
        bucket
        key
        access
      }
    }
    components {
      ingredient {
        id
        name
        alcoholic
      }
      product {
        id
        name
        proof
        volume
      }
      ratio
    }
    reviews {
      items {
        id
        score
        comment
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
  }
}
`;
export const updateRecipe = `mutation UpdateRecipe($input: UpdateRecipeInput!) {
  updateRecipe(input: $input) {
    id
    name
    price
    description
    instructions
    profilePic {
      icon {
        bucket
        key
        access
      }
      small {
        bucket
        key
        access
      }
      large {
        bucket
        key
        access
      }
      banner {
        bucket
        key
        access
      }
    }
    components {
      ingredient {
        id
        name
        alcoholic
      }
      product {
        id
        name
        proof
        volume
      }
      ratio
    }
    reviews {
      items {
        id
        score
        comment
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
  }
}
`;
export const deleteRecipe = `mutation DeleteRecipe($input: DeleteRecipeInput!) {
  deleteRecipe(input: $input) {
    id
    name
    price
    description
    instructions
    profilePic {
      icon {
        bucket
        key
        access
      }
      small {
        bucket
        key
        access
      }
      large {
        bucket
        key
        access
      }
      banner {
        bucket
        key
        access
      }
    }
    components {
      ingredient {
        id
        name
        alcoholic
      }
      product {
        id
        name
        proof
        volume
      }
      ratio
    }
    reviews {
      items {
        id
        score
        comment
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
  }
}
`;
export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    name
    ingredient {
      id
      name
      alcoholic
      products {
        nextToken
      }
    }
    proof
    volume
  }
}
`;
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    id
    name
    ingredient {
      id
      name
      alcoholic
      products {
        nextToken
      }
    }
    proof
    volume
  }
}
`;
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
    id
    name
    ingredient {
      id
      name
      alcoholic
      products {
        nextToken
      }
    }
    proof
    volume
  }
}
`;
export const createIngredient = `mutation CreateIngredient($input: CreateIngredientInput!) {
  createIngredient(input: $input) {
    id
    name
    alcoholic
    products {
      items {
        id
        name
        proof
        volume
      }
      nextToken
    }
  }
}
`;
export const updateIngredient = `mutation UpdateIngredient($input: UpdateIngredientInput!) {
  updateIngredient(input: $input) {
    id
    name
    alcoholic
    products {
      items {
        id
        name
        proof
        volume
      }
      nextToken
    }
  }
}
`;
export const deleteIngredient = `mutation DeleteIngredient($input: DeleteIngredientInput!) {
  deleteIngredient(input: $input) {
    id
    name
    alcoholic
    products {
      items {
        id
        name
        proof
        volume
      }
      nextToken
    }
  }
}
`;
export const createDevice = `mutation CreateDevice($input: CreateDeviceInput!) {
  createDevice(input: $input) {
    id
    status
    name
    semantic_id
    pourCode
    vendor {
      id
      semanticId
      name
      website
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
    calibration {
      formula
    }
    pumps {
      items {
        id
        semantic_id
        status
        costByVolume
        volumeLeft
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
    availableRecipes {
      id
      name
      drinks {
        nextToken
      }
      vendor {
        id
        semanticId
        name
        website
      }
    }
  }
}
`;
export const updateDevice = `mutation UpdateDevice($input: UpdateDeviceInput!) {
  updateDevice(input: $input) {
    id
    status
    name
    semantic_id
    pourCode
    vendor {
      id
      semanticId
      name
      website
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
    calibration {
      formula
    }
    pumps {
      items {
        id
        semantic_id
        status
        costByVolume
        volumeLeft
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
    availableRecipes {
      id
      name
      drinks {
        nextToken
      }
      vendor {
        id
        semanticId
        name
        website
      }
    }
  }
}
`;
export const deleteDevice = `mutation DeleteDevice($input: DeleteDeviceInput!) {
  deleteDevice(input: $input) {
    id
    status
    name
    semantic_id
    pourCode
    vendor {
      id
      semanticId
      name
      website
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
    calibration {
      formula
    }
    pumps {
      items {
        id
        semantic_id
        status
        costByVolume
        volumeLeft
      }
      nextToken
    }
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
    availableRecipes {
      id
      name
      drinks {
        nextToken
      }
      vendor {
        id
        semanticId
        name
        website
      }
    }
  }
}
`;
export const createPump = `mutation CreatePump($input: CreatePumpInput!) {
  createPump(input: $input) {
    id
    semantic_id
    status
    product {
      id
      name
      ingredient {
        id
        name
        alcoholic
      }
      proof
      volume
    }
    costByVolume
    volumeLeft
    calibration {
      weights
    }
  }
}
`;
export const updatePump = `mutation UpdatePump($input: UpdatePumpInput!) {
  updatePump(input: $input) {
    id
    semantic_id
    status
    product {
      id
      name
      ingredient {
        id
        name
        alcoholic
      }
      proof
      volume
    }
    costByVolume
    volumeLeft
    calibration {
      weights
    }
  }
}
`;
export const deletePump = `mutation DeletePump($input: DeletePumpInput!) {
  deletePump(input: $input) {
    id
    semantic_id
    status
    product {
      id
      name
      ingredient {
        id
        name
        alcoholic
      }
      proof
      volume
    }
    costByVolume
    volumeLeft
    calibration {
      weights
    }
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
    reviews {
      items {
        id
        score
        comment
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
    reviews {
      items {
        id
        score
        comment
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    orders {
      items {
        id
        status
        price
        cost
      }
      nextToken
    }
    reviews {
      items {
        id
        score
        comment
      }
      nextToken
    }
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    status
    price
    cost
    consumer {
      id
      name
      orders {
        nextToken
      }
      reviews {
        nextToken
      }
    }
    recipe {
      id
      name
      price
      description
      instructions
      components {
        ratio
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
    device {
      id
      status
      name
      semantic_id
      pourCode
      vendor {
        id
        semanticId
        name
        website
      }
      calibration {
        formula
      }
      pumps {
        nextToken
      }
      orders {
        nextToken
      }
      availableRecipes {
        id
        name
      }
    }
    vendor {
      id
      semanticId
      name
      website
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
    timestamps {
      ordered
      paid
      poured
    }
  }
}
`;
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
    id
    status
    price
    cost
    consumer {
      id
      name
      orders {
        nextToken
      }
      reviews {
        nextToken
      }
    }
    recipe {
      id
      name
      price
      description
      instructions
      components {
        ratio
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
    device {
      id
      status
      name
      semantic_id
      pourCode
      vendor {
        id
        semanticId
        name
        website
      }
      calibration {
        formula
      }
      pumps {
        nextToken
      }
      orders {
        nextToken
      }
      availableRecipes {
        id
        name
      }
    }
    vendor {
      id
      semanticId
      name
      website
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
    timestamps {
      ordered
      paid
      poured
    }
  }
}
`;
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
    id
    status
    price
    cost
    consumer {
      id
      name
      orders {
        nextToken
      }
      reviews {
        nextToken
      }
    }
    recipe {
      id
      name
      price
      description
      instructions
      components {
        ratio
      }
      reviews {
        nextToken
      }
      orders {
        nextToken
      }
    }
    device {
      id
      status
      name
      semantic_id
      pourCode
      vendor {
        id
        semanticId
        name
        website
      }
      calibration {
        formula
      }
      pumps {
        nextToken
      }
      orders {
        nextToken
      }
      availableRecipes {
        id
        name
      }
    }
    vendor {
      id
      semanticId
      name
      website
      collections {
        nextToken
      }
      devices {
        nextToken
      }
      orders {
        nextToken
      }
    }
    timestamps {
      ordered
      paid
      poured
    }
  }
}
`;
