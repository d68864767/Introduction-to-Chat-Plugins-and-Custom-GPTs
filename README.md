# Introduction to Chat Plugins and Custom GPTs

This project is about enabling ChatGPT to interact with third-party APIs, expanding its capabilities to include actions like retrieving real-time information, accessing knowledge bases, and assisting with tasks. It also includes creating tailored versions of ChatGPT for specific tasks or environments, which can be shared with others.

## Building a Plugin

To build a plugin, you need to create a Manifest File and host it at yourdomain.com/.well-known/ai-plugin.json. This file should include metadata, authentication details, and an OpenAPI spec for your endpoints. The OpenAPI Specification helps the model understand when and how to use the API. Initially, you should expose 1-2 endpoints with minimal parameters to manage context limits.

## Registering Your Plugin

To register your plugin, you need to choose the appropriate plugin model in the ChatGPT UI and provide necessary OAuth or API key details if your plugin requires authentication.

## User Activation and Usage

Users must activate plugins manually in the ChatGPT UI. For plugins requiring OAuth, users will authenticate via your plugin. ChatGPT will receive a compact description of your plugin and may invoke API calls based on user queries.

## Plugin Interaction and Display

The model incorporates API call results into its responses. Links from API calls can be shown with rich previews using the OpenGraph protocol. The ChatGPT UI can render markdown formatted data from your API.

## Additional Information

The plugin conversation header may include user's country and state for relevant context. It's important to understand the legal aspects of plugin development.

## Next Steps for Developers

Start building your plugin, look at sample plugins for inspiration, select the appropriate authentication method for your plugin, learn the necessary steps to prepare your plugin for production use, understand the plugin review process before deployment, and familiarize yourself with the guidelines and policies governing plugin use.

## Files in this project

- manifest.json
- openapi_spec.json
- plugin_model_selection.js
- authentication_setup.js
- user_activation.js
- oauth_process.js
- conversation_integration.js
- api_responses.js
- rich_previews.js
- markdown_formatting.js
- user_location_data.js
- developer_terms_of_use.md
- start_building.js
- examples.js
- authentication_schema.js
- productionize_plugin.js
- review_process.js
- plugin_policies.md

This framework provides a solid foundation for developers to create and integrate custom plugins into ChatGPT, enhancing its versatility and applicability in various domains.
