load("@aspect_rules_esbuild//esbuild:defs.bzl", "esbuild")
load("@bazel_tools//tools/build_defs/pkg:pkg.bzl", "pkg_tar")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(name = "node_modules")


esbuild(
  name = "bundle",
  entry_point = "src/main.tsx",
  srcs = glob(['src/**/*']),
  deps = [
    '//packages/frontend:node_modules/react',
    '//packages/frontend:node_modules/react-dom'
  ]
)

pkg_tar(
    name = "bundle-tar",
    srcs = [":bundle"],
)
