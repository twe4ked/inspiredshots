# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Inspiredshots::Application.initialize!

# Compact css output
Sass::Plugin.options[:style] = :compact
