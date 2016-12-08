import fnmatch
import os
import shutil

rootPath = 'pages'
destDir = 'pages/dev-test/json'

matches = []
for root, dirnames, filenames in os.walk(rootPath):
  for filename in fnmatch.filter(filenames, '*.mp4'):
      matches.append(os.path.join(root, filename))
      # print(os.path.join(root, filename))
      shutil.move(os.path.join(root, filename), os.path.join(destDir, filename))
