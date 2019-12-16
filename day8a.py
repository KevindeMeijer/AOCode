import numpy as np
import matplotlib.pyplot as plt

filename = 'day8input'

with open(filename, 'r') as f:
    
    image = np.array([int(x) for x in f.read().strip()])
    image = image.reshape(-1, 25*6)
    
    idx = (image != 0).sum(axis=1).argmax()
    part1_output = (image[idx] == 1).sum() * (image[idx] == 2).sum()

    part2_output = image[0]
    for layer in image:
        # if element in row does not equal to 2, leave it, else replace
        part2_output = np.where(part2_output != 2, part2_output, layer)
    
    part2_output = part2_output.reshape(6,25)
    
    plt.imshow(part2_output)