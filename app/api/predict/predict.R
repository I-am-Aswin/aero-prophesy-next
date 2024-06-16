library( randomForest );

# Load the saved model
model <- readRDS("/media/General/Projects/WP/Web/server/Model.rds")

# Define a function to make predictions
predict_model <- function(inp_data) {
  predictions <- stats::predict(model, newdata=inp_data)
  return(predictions)
}

args <- commandArgs(trailingOnly = TRUE)
input_data <- data.frame(
  precipitation = as.numeric(args[1]),
  temp_max = as.numeric(args[2]),
  temp_min = as.numeric(args[3]),
  wind = as.numeric(args[4])
)

# Make predictions
predictions <- predict_model(input_data)

# Print the predictions
cat(predictions)